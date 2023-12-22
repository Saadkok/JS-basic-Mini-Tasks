function findSecondMax(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3)
     {
        if (num2 >= num3) 
        {
            return num2;
        } 
        else {
            return num3;
        }
    } 

    
    else if (num2 >= num1 && num2 >= num3) 
    {
        if (num1 >= num3) 
        {
            return num1;
        } 
        else {
            return num3;
        }
    } 
    else {
        if (num1 >= num2)
         {
            return num1;
        } 
        else {
            return num2;
        }
    }
}

console.log("Second Max:", findSecondMax(10, 5, 20)); // Example usage
