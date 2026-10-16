/**
 * app2.js - Ecommerce Website - Product Interactions & Cart Management
 * 
 * Handles:
 * - Sign up modal toggle
 * - Product quantity selection and cart updates
 * - Dynamic UI interactions
 * 
 * @author Rajgopal Pandilwar
 * @basedOn Original work by Vatshayan
 */

// Debug: Confirm app2.js loaded successfully
console.log('Ecommerce app initialized');

/**
 * Sign Up Button Click Handler
 * Opens the user registration modal when the sign-up button is clicked
 */
$(".signUpButton").click(function () {
    console.log('Sign up button clicked - opening modal');
    $("#signUpModal").style("display", "block");
});

/**
 * Quantity Form Submission Handler
 * Prevents default form submission and updates the cart item count
 * based on the selected quantity from the dropdown
 */
$('#quantityOfUnicornsForm').submit(function(e) {
    e.preventDefault();
    
    // Get the selected quantity from the dropdown
    var numberOfUnicorns = $("#quantityOfUnicorns option:selected").text();
    console.log('Selected quantity:', numberOfUnicorns);
    
    // Update the cart display with the new quantity
    $("#cartItems").text(numberOfUnicorns);
});

// Close modal handler (currently commented out for future use)
// $('#signUpBtn').modal('hide');

