import React, { Component } from "react";
import "./Calculator.css"
import Button from "../components/Button";
import Display from "../components/Display";

const inicialState = {
    valueOpera: "",
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0.0, 0.0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...inicialState }

    clearMemory() {
        this.setState({ ...inicialState })
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
            
            const valor = this.state.displayValue + " " + operation
            this.setState({
                valueOpera: valor,
            })
        } else {

            const valor = this.state.values
            console.log(valor)

            if (operation === "=") {
                console.log("entrou no if =")
                if (this.state.operation === "+") {
                    console.log("antes")
                    valor[0] = valor[0] + valor[1]
                    console.log("entrou no if = e if + ", valor[0])
                }
                else if (this.state.operation === "-") {
                    valor[0] = valor[0] - valor[1]
                }
                else if (this.state.operation === "/") {
                    valor[0] = valor[0] / valor[1]
                }
                else if (this.state.operation === "*") {
                    valor[0] = valor[0] * valor[1]
                }
                
                const displayOpera = this.state.valueOpera +" " + valor[1] + " ="

                valor[1] = 0
                
                this.setState({
                    valueOpera: displayOpera,
                    displayValue: valor[0],
                    operation: null,
                    current: 0,
                    clearDisplay: false,
                    values: valor
                })
            }
            else if (operation === "+") {
                console.log("entrou no if +")
                if (this.state.operation === "+") {
                    console.log("antes")
                    valor[0] = valor[0] + valor[1]
                    console.log("entrou no if = e if + ", valor[0])
                }
                else if (this.state.operation === "-") {
                    valor[0] = valor[0] - valor[1]
                }
                else if (this.state.operation === "/") {
                    valor[0] = valor[0] / valor[1]
                }
                else if (this.state.operation === "*") {
                    valor[0] = valor[0] * valor[1]
                }
                valor[1] = 0
                this.setState({
                    displayValue: valor[0],
                    operation: operation,
                    current: 1,
                    clearDisplay: true,
                    values: valor
                })
            }
            else if (operation === "-") {
                console.log("entrou no if -")
                if (this.state.operation === "+") {
                    console.log("antes")
                    valor[0] = valor[0] + valor[1]
                    console.log("entrou no if = e if + ", valor[0])
                }
                else if (this.state.operation === "-") {
                    valor[0] = valor[0] - valor[1]
                }
                else if (this.state.operation === "/") {
                    valor[0] = valor[0] / valor[1]
                }
                else if (this.state.operation === "*") {
                    valor[0] = valor[0] * valor[1]
                }
                this.setState({
                    displayValue: valor[0],
                    operation: operation,
                    current: 1,
                    clearDisplay: true,
                    values: valor
                })

            }
            else if (operation === "*") {
                console.log("entrou no if -")
                if (this.state.operation === "+") {
                    console.log("antes")
                    valor[0] = valor[0] + valor[1]
                    console.log("entrou no if = e if + ", valor[0])
                }
                else if (this.state.operation === "-") {
                    valor[0] = valor[0] - valor[1]
                }
                else if (this.state.operation === "/") {
                    valor[0] = valor[0] / valor[1]
                }
                else if (this.state.operation === "*") {
                    valor[0] = valor[0] * valor[1]
                }
                this.setState({
                    displayValue: valor[0],
                    operation: operation,
                    current: 1,
                    clearDisplay: true,
                    values: valor
                })
            }
            else if (operation === "/") {
                console.log("entrou no if -")
                if (this.state.operation === "+") {
                    console.log("antes")
                    valor[0] = valor[0] + valor[1]
                    console.log("entrou no if = e if + ", valor[0])
                }
                else if (this.state.operation === "-") {
                    valor[0] = valor[0] - valor[1]
                }
                else if (this.state.operation === "/") {
                    valor[0] = valor[0] / valor[1]
                }
                else if (this.state.operation === "*") {
                    valor[0] = valor[0] * valor[1]
                }
                this.setState({
                    displayValue: valor[0],
                    operation: operation,
                    current: 1,
                    clearDisplay: true,
                    values: valor
                })
            }
        }
    }

    addDigit(digit) {
        if (digit === "." && this.state.displayValue.includes(".")) {
            return
        }

        const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay
        const currentValue = clearDisplay ? "" : this.state.displayValue
        const displayValue = currentValue + digit
        this.setState({ displayValue, clearDisplay: false })

        if (digit !== ".") {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = { ...this.state.values }
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }

    }


    render() {
        const addDigit = digit => this.addDigit(digit)
        const setOperation = operation => this.setOperation(operation)
        const clearMemory = e => this.clearMemory()
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} valueOpera={this.state.valueOpera}></Display>
                <Button label="AC" click={clearMemory} triple ></Button>
                <Button label="/" click={setOperation} operation ></Button>
                <Button label="7" click={addDigit}></Button>
                <Button label="8" click={addDigit}></Button>
                <Button label="9" click={addDigit}></Button>
                <Button label="*" click={setOperation} operation ></Button>
                <Button label="4" click={addDigit}></Button>
                <Button label="5" click={addDigit}></Button>
                <Button label="6" click={addDigit}></Button>
                <Button label="-" click={setOperation} operation ></Button>
                <Button label="1" click={addDigit}></Button>
                <Button label="2" click={addDigit}></Button>
                <Button label="3" click={addDigit}></Button>
                <Button label="+" click={setOperation} operation ></Button>
                <Button label="0" click={addDigit} double ></Button>
                <Button label="." click={addDigit}></Button>
                <Button label="=" click={setOperation} equal ></Button>

            </div>
        )
    }
}