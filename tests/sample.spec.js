const { test, expect } = require('@playwright/test');

// test : to declare a test
// expect is for assert test

test("My first test", async ({ page }) => {
    // Your test code goes here
    expect(12).toBe(12);
});

test.skip("My second test", async ({ page }) => {
    // Your test code goes here
    expect(100).toBe(101);
});

test("My third test", async ({ page }) => {
    // Your test code goes here
    expect(2.0).toBe(2.0);
});

// test.only("My fourth test", async ({ page }) => {
//     expect("My name is Idrees").toContain("Idrees1");
// });

test("My fourth test", async ({ page }) => {
    expect("My name is Idrees").toContain("Idrees");
    expect(true).toBeTruthy();
});

test("My fifth test", async ({ page }) => {
    expect(false).toBeFalsy();
});

test("My six test", async ({ page }) => {
    // this will fail the test 
    
    expect("Muhammad Idrees".includes("Idrees")).toBeTruthy();
    //expect("Muhammad Idres".includes("Idrees")).toBeFalsy();
});