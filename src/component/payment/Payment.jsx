import React, { useState } from "react";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const handlePaymentMethodChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  const handleConfirmPayment = () => {
    alert(`Payment successfully `);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-4/5 max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQpfiyTSg8pb4vTrGuXIL3KIefV3d75EGC4dtcesZHeH1-GFJ-a')", // Replace with your image URL
          }}
        ></div>

        <div className="w-1/2 p-8 bg-[#013B5A] text-white">
          <h2 className="text-2xl font-bold mb-4">Payment Gateway</h2>
          <p className="mb-6">Select your preferred payment method below:</p>

          <form className="space-y-4">
            <div>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Credit/Debit Card"
                  className="mr-3"
                  onChange={handlePaymentMethodChange}
                />
                Credit/Debit Card
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="UPI"
                  className="mr-3"
                  onChange={handlePaymentMethodChange}
                />
                UPI
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Wallets"
                  className="mr-3"
                  onChange={handlePaymentMethodChange}
                />
                Wallets
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Net Banking"
                  className="mr-3"
                  onChange={handlePaymentMethodChange}
                />
                Net Banking
              </label>
            </div>
          </form>

          <button
            className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={handleConfirmPayment}
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
