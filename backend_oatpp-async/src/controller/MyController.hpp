#ifndef MyController_hpp
#define MyController_hpp

#include "dto/DTOs.hpp"
#include <iostream>
#include "oatpp/web/server/api/ApiController.hpp"
#include "oatpp/core/macro/codegen.hpp"
#include "oatpp/core/macro/component.hpp"
#include <string>
#include "../service/Calculator.hpp"

#include OATPP_CODEGEN_BEGIN(ApiController) //<-- Begin codegen

/**
 * Sample Api Controller.
 */
class MyController : public oatpp::web::server::api::ApiController
{
private:
  typedef MyController __ControllerType;

public:
  /**
   * Constructor with object mapper.
   * @param objectMapper - default object mapper used to serialize/deserialize DTOs.
   */
  MyController(OATPP_COMPONENT(std::shared_ptr<ObjectMapper>, objectMapper))
      : oatpp::web::server::api::ApiController(objectMapper)
  {
  }

public:
  ENDPOINT_ASYNC("GET", "/hello", Root){

      ENDPOINT_ASYNC_INIT(Root)

          Action act() override{
              auto dto = MessageDto::createShared();
  dto->statusCode = 200;
  dto->message = "Hello World Async!";
  return _return(controller->createDtoResponse(Status::CODE_200, dto));
}
}
;
// ADD_CORS(CalculateTwoNumbers, "*", "GET, POST, OPTIONS", "DNT, User-Agent, X-Requested-With, If-Modified-Since, Cache-Control, Content-Type, Range")
ENDPOINT_INFO(CalculateTwoNumbers)
{
  info->summary = "Given two numbers: a,b; and operation, it complutes a operation b";
  info->addResponse<String>(Status::CODE_200, "calculate succeed");
  info->pathParams.add<String>("param1").description = "first number";  // add param1 info
  info->pathParams.add<String>("param2").description = "second number"; // add param2 info
  info->pathParams.add<String>("param2").description = "third number";  // add param3 info
}
ADD_CORS(CalculateTwoNumbers, "*", "GET, POST, OPTIONS", "DNT, User-Agent, X-Requested-With, If-Modified-Since, Cache-Control, Content-Type, Range")
ENDPOINT_ASYNC("GET", "/calculator/{param1}/{param2}/{param3}", CalculateTwoNumbers){

    ENDPOINT_ASYNC_INIT(CalculateTwoNumbers)
        Action act() override{
            double p1 = std::stod(request->getPathVariable("param1"));
double p2 = std::stod(request->getPathVariable("param2"));
String p3 = request->getPathVariable("param3");
OATPP_ASSERT_HTTP(p1 &&p2 &&p3, Status::CODE_400, "param1 and param2 and param3 should not be null");
// Calculator c = new Calculator(p1, p2, p3);
Calculator c(p1, p2, p3);
c.calculate();
double result = c.getResult();
auto dto = MessageDto::createShared();
dto->statusCode = 200;
dto->message = std::to_string(result);
std::cout << std::to_string(result) << "\n";
return _return(controller->createDtoResponse(Status::CODE_200, dto));
}
}
;

// TODO Insert Your endpoints here !!!
}
;

#include OATPP_CODEGEN_BEGIN(ApiController) //<-- End codegen

#endif /* MyController_hpp */
