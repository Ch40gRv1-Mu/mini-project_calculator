class CalculatorApi {
    constructor(serviceAddress) {
        this.serviceAddress = serviceAddress;
    }

    makeURL(number1,number2,operation){
        const resource =  'calculator/'+number1+'/'+number2+"/"+operation;
        return new URL(resource,this.serviceAddress);
    }
    calculate(number1, number2, operation, handler)
    {
        let headers = new Headers();
        headers.append('Origin','http://localhost:3000');
        fetch(this.makeURL(number1, number2, operation),{mode:'cors', method:'GET',headers:headers})
            .then(res=>res.json())
            .then ((response) => {
                    handler(response["message"]);
                },
                (err) =>{
                    handler(err);
                    console.log(err);

                }
            );
    }
}

export default CalculatorApi;