// Using a teranry operator to check if we have data on our products listing

let products = JSON.parse(localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) :

JSON.parse(localStorage.setItem("products", 
JSON.stringify(
    [
        {
            
        }
    ]
)))
