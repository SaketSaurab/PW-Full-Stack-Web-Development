I'll now continue with **Conditional Statements** and proceed with the remaining topics. 🚀  

---------------------------------------------------------------

## **3. Conditional Statements – Solutions**  

### **1. Check if a number is positive, negative, or zero.**  

public class NumberCheck {
    public static void main(String[] args) {
        int num = -5;
        if (num > 0)
            System.out.println("Positive");
        else if (num < 0)
            System.out.println("Negative");
        else
            System.out.println("Zero");
    }
}

---------------------------------------------------------------
### **2. Find the largest of three numbers.**  

public class LargestNumber {
    public static void main(String[] args) {
        int a = 10, b = 20, c = 15;
        if (a >= b && a >= c)
            System.out.println("Largest: " + a);
        else if (b >= a && b >= c)
            System.out.println("Largest: " + b);
        else
            System.out.println("Largest: " + c);
    }
}

---------------------------------------------------------------
### **3. Check if a number is even or odd.**  

public class EvenOddCheck {
    public static void main(String[] args) {
        int num = 8;
        if (num % 2 == 0)
            System.out.println(num + " is Even");
        else
            System.out.println(num + " is Odd");
    }
}

---------------------------------------------------------------
### **4. Check if a character is a vowel or consonant.**  

public class VowelConsonant {
    public static void main(String[] args) {
        char ch = 'e';
        if ("AEIOUaeiou".indexOf(ch) != -1)
            System.out.println(ch + " is a Vowel");
        else
            System.out.println(ch + " is a Consonant");
    }
}

---------------------------------------------------------------
### **5. Check if a year is a leap year.**  

public class LeapYear {
    public static void main(String[] args) {
        int year = 2024;
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
            System.out.println(year + " is a Leap Year");
        else
            System.out.println(year + " is not a Leap Year");
    }
}

---------------------------------------------------------------
### **6. Check if a person is eligible to vote (age >= 18).**  

public class VotingEligibility {
    public static void main(String[] args) {
        int age = 17;
        if (age >= 18)
            System.out.println("Eligible to vote");
        else
            System.out.println("Not eligible to vote");
    }
}

---------------------------------------------------------------
### **7. Check whether a given number is a multiple of both 3 and 5.**  

public class MultipleCheck {
    public static void main(String[] args) {
        int num = 15;
        if (num % 3 == 0 && num % 5 == 0)
            System.out.println(num + " is a multiple of both 3 and 5");
        else
            System.out.println(num + " is not a multiple of both 3 and 5");
    }
}

---------------------------------------------------------------
### **8. Find the grade based on marks (A, B, C, etc.).**  

public class GradeCheck {
    public static void main(String[] args) {
        int marks = 85;
        if (marks >= 90)
            System.out.println("Grade: A");
        else if (marks >= 80)
            System.out.println("Grade: B");
        else if (marks >= 70)
            System.out.println("Grade: C");
        else if (marks >= 60)
            System.out.println("Grade: D");
        else
            System.out.println("Grade: F");
    }
}

---------------------------------------------------------------
### **9. Determine the type of triangle based on its sides.**  

public class TriangleType {
    public static void main(String[] args) {
        int a = 5, b = 5, c = 5;
        if (a == b && b == c)
            System.out.println("Equilateral Triangle");
        else if (a == b || b == c || a == c)
            System.out.println("Isosceles Triangle");
        else
            System.out.println("Scalene Triangle");
    }
}

---------------------------------------------------------------
### **10. Simple calculator using switch-case.**  

import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number: ");
        int a = sc.nextInt();
        System.out.print("Enter second number: ");
        int b = sc.nextInt();
        System.out.print("Enter operator (+, -, *, /): ");
        char op = sc.next().charAt(0);

        switch (op) {
            case '+': System.out.println("Result: " + (a + b)); break;
            case '-': System.out.println("Result: " + (a - b)); break;
            case '*': System.out.println("Result: " + (a * b)); break;
            case '/': System.out.println("Result: " + (a / b)); break;
            default: System.out.println("Invalid Operator");
        }
    }
}

---------------------------------------------------------------

I've completed **Conditional Statements** with easy solutions. 🚀  
Next, I'll continue with **Loops**. Let me know if you have any preferences!