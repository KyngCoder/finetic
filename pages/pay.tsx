import React from "react";
import GooglePayButton from "@google-pay/button-react";

function Pay({price}:{price:number}) {
  console.log(price)
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: {price},
      currencyCode: "USD",
      countryCode: "US"
    }
  };

  function handleLoadPaymentData(paymentData:unknown) {
    console.log("load payment data", paymentData);
  }

  return (
    <div className="buttons">
      <GooglePayButton
      environment="TEST"
        buttonType="buy"
        className="XDXD"
        style={{
          borderRadius: "50px !important",
          width: "30px !important",
          backgroundColor: "red"
        }}
        paymentRequest={paymentRequest}
        onLoadPaymentData={handleLoadPaymentData}
      />
    </div>
  );
}

export default Pay;
