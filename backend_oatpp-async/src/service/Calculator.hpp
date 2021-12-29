#include <string>

class Calculator
{
private:
    double _num1 = 0;
    double _num2 = 0;
    std::string _operation = "";
    double _result = 0;

public:
    Calculator(double num1, double num2, std::string operation)
    {
        _num1 = num1;
        _num2 = num2;
        _operation = operation;
    }

    void calculate()
    {
        // 1: +
        if (_operation == "add")
            _result = _num1 + _num2;
        // 2: -
        else if (_operation == "subtract")
            _result = _num1 - _num2;
        // 3: *
        else if (_operation == "multiply")
            _result = _num1 * _num2;
        // 4: -
        else if (_operation == "divide")
            _result = _num1 / _num2;
    }

    double getResult() { return _result; }
};