"use client";

import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import {
  Upload,
  List,
  Camera,
  XCircle,
  ArrowRight,
  CheckCircle,
  DollarSign,
} from "lucide-react";

// ---------- Sidebar ----------
function Sidebar({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (t: string) => void;
}) {
  return (
    <div className="w-64 h-screen bg-white shadow-lg p-6 flex flex-col">
      <h2 className="text-2xl font-bold text-emerald-600 mb-8">Dashboard</h2>
      <button
        onClick={() => setActiveTab("upload")}
        className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-3 font-medium ${
          activeTab === "upload"
            ? "bg-emerald-600 text-white"
            : "hover:bg-gray-100 text-gray-700"
        }`}
      >
        <Upload className="h-5 w-5" />
        <span>Upload Device</span>
      </button>
      <button
        onClick={() => setActiveTab("products")}
        className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium ${
          activeTab === "products"
            ? "bg-emerald-600 text-white"
            : "hover:bg-gray-100 text-gray-700"
        }`}
      >
        <List className="h-5 w-5" />
        <span>Uploaded Products</span>
      </button>
    </div>
  );
}

// ---------- Uploaded Products ----------
function UploadedProducts({ products }: { products: any[] }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Uploaded Products
      </h2>
      <div className="grid gap-4">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow flex items-center space-x-4"
          >
            {p.images.front && (
              <img
                src={URL.createObjectURL(p.images.front)}
                alt="front"
                className="w-20 h-20 object-cover rounded-lg"
              />
            )}
            <div>
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-gray-500">
                {p.brand} - {p.version}
              </p>
              <p className="text-emerald-600 font-medium">₹{p.finalPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- Upload Flow ----------
function UploadFlow({
  onProductUploaded,
}: {
  onProductUploaded: (p: any) => void;
}) {
  const [step, setStep] = useState<
    "upload" | "details" | "pricing" | "complete"
  >("upload");

  const [productData, setProductData] = useState<any>({
    images: {
      front: null,
      back: null,
      left: null,
      right: null,
      top: null,
      bottom: null,
    },
    name: "",
    version: "",
    brand: "",
    working: null,
    yearsUsed: 0,
    location: "",
    components: { screen: false, battery: false, charger: false, accessories: false },
  });

  const [showConvincingPopup, setShowConvincingPopup] = useState(false);
  const [popupStage, setPopupStage] = useState(0);
  const [suggestedPrice, setSuggestedPrice] = useState(0);

  const handleImageUpload = (side: string, file: File) => {
    setProductData((prev: any) => ({
      ...prev,
      images: { ...prev.images, [side]: file },
    }));
  };

  const allImagesUploaded = Object.values(productData.images).every((img) => img);

  const handleBasicSubmit = () => {
    if (
      allImagesUploaded &&
      productData.name &&
      productData.brand &&
      productData.location
    ) {
      setStep("details");
    }
  };

  const handleDetailsSubmit = () => {
    let basePrice = 1000;
    if (productData.working) basePrice *= 1.5;
    if (productData.yearsUsed < 2) basePrice *= 1.3;
    else if (productData.yearsUsed > 5) basePrice *= 0.7;

    const componentCount = Object.values(productData.components).filter(
      Boolean
    ).length;
    basePrice += componentCount * 200;

    setSuggestedPrice(Math.round(basePrice));
    setStep("pricing");
  };

  const handleAcceptPrice = () => {
    const finalProduct = { ...productData, finalPrice: suggestedPrice };
    onProductUploaded(finalProduct);
    setStep("complete");
  };

  const handleRejectPrice = () => {
    setShowConvincingPopup(true);
    setPopupStage(0);
  };

  const convincingMessages = [
    {
      title: "Wait! This is a Great Offer!",
      message: `₹${suggestedPrice} is based on market rates for your ${productData.brand} ${productData.name}.`,
      action: "Reconsider",
    },
    {
      title: "Environmental Impact Bonus",
      message:
        "By selling here, you prevent e-waste and earn carbon credits worth ₹100 extra.",
      action: "Accept Bonus",
    },
    {
      title: "Final Offer - Limited Time",
      message: `We can offer ₹${
        suggestedPrice + 150
      } as our final price. Free pickup + instant payment.`,
      action: "Take Final Offer",
    },
  ];

  const handleConvincingResponse = (accepted: boolean) => {
    if (accepted) {
      let final = suggestedPrice;
      if (popupStage === 2) final += 150;
      const finalProduct = { ...productData, finalPrice: final };
      onProductUploaded(finalProduct);
      setShowConvincingPopup(false);
      setStep("complete");
    } else {
      if (popupStage < 2) {
        setPopupStage(popupStage + 1);
      } else {
        setShowConvincingPopup(false);
        setStep("upload");
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8">
        {/* Progress */}
        <div className="flex items-center mb-8">
          {["Upload", "Details", "Pricing", "Complete"].map((stepName, index) => (
            <div key={stepName} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  ["upload", "details", "pricing", "complete"].indexOf(step) >=
                  index
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {index + 1}
              </div>
              <span className="ml-2 text-sm font-medium">{stepName}</span>
              {index < 3 && (
                <ArrowRight className="h-4 w-4 text-gray-400 mx-4" />
              )}
            </div>
          ))}
        </div>

        {/* Upload Step */}
        {step === "upload" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Upload Product Images</h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {["front", "back", "left", "right", "top", "bottom"].map((side) => (
                <div
                  key={side}
                  className="w-full aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center relative"
                >
                  {productData.images[side] ? (
                    <img
                      src={URL.createObjectURL(productData.images[side])}
                      alt={side}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <label className="cursor-pointer text-center text-gray-500">
                      <Camera className="h-6 w-6 mx-auto mb-1" />
                      <span className="block capitalize">{side}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          e.target.files &&
                          handleImageUpload(side, e.target.files[0])
                        }
                      />
                    </label>
                  )}
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Product Name"
                value={productData.name}
                onChange={(e) =>
                  setProductData({ ...productData, name: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Brand"
                value={productData.brand}
                onChange={(e) =>
                  setProductData({ ...productData, brand: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Version"
                value={productData.version}
                onChange={(e) =>
                  setProductData({ ...productData, version: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Location"
                value={productData.location}
                onChange={(e) =>
                  setProductData({ ...productData, location: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>

            <button
              onClick={handleBasicSubmit}
              disabled={
                !allImagesUploaded ||
                !productData.name ||
                !productData.brand ||
                !productData.location
              }
              className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 disabled:bg-gray-300"
            >
              Continue to Details
            </button>
          </div>
        )}

        {/* Details Step */}
        {step === "details" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Device Details</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-4">
                  Is the device working?
                </label>
                <div className="flex space-x-4">
                  <button
                    onClick={() =>
                      setProductData({ ...productData, working: true })
                    }
                    className={`px-6 py-3 rounded-lg ${
                      productData.working === true
                        ? "bg-green-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() =>
                      setProductData({ ...productData, working: false })
                    }
                    className={`px-6 py-3 rounded-lg ${
                      productData.working === false
                        ? "bg-red-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">
                  How many years used?
                </label>
                <input
                  type="text"
                  max="20"
                  value={productData.yearsUsed}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      yearsUsed: parseInt(e.target.value) || 0,
                    })
                  }
                  className="w-32 px-4 py-3 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm mb-4">Components included:</label>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(productData.components).map(([key, value]) => (
                    <label key={key} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={Boolean(value)}
                        onChange={(e) =>
                          setProductData({
                            ...productData,
                            components: {
                              ...productData.components,
                              [key]: e.target.checked,
                            },
                          })
                        }
                      />
                      <span className="capitalize">{key}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleDetailsSubmit}
              disabled={productData.working === null}
              className="w-full mt-6 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 disabled:bg-gray-300"
            >
              Get Price Estimate
            </button>
          </div>
        )}

        {/* Pricing Step */}
        {step === "pricing" && (
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold">Price Estimate</h2>
            <div className="bg-emerald-50 rounded-xl p-8">
              <DollarSign className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-emerald-600 mb-2">
                ₹{suggestedPrice}
              </div>
              <p className="text-gray-600">
                Estimated value for your {productData.brand} {productData.name}
              </p>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleAcceptPrice}
                className="flex-1 bg-emerald-600 text-white py-3 rounded-lg"
              >
                Accept & Sell
              </button>
              <button
                onClick={handleRejectPrice}
                className="flex-1 bg-gray-600 text-white py-3 rounded-lg"
              >
                Decline
              </button>
            </div>
          </div>
        )}

        {/* Complete Step */}
        {step === "complete" && (
          <div className="text-center space-y-6">
            <CheckCircle className="h-24 w-24 text-emerald-600 mx-auto" />
            <h2 className="text-3xl font-bold">Congratulations!</h2>
            <p>
              Your {productData.brand} {productData.name} has been listed for
              sale.
            </p>
            <p className="font-semibold text-emerald-600">
              Final Price: ₹{suggestedPrice}
            </p>
          </div>
        )}
      </div>

      {/* Convincing Popup */}
      {showConvincingPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md mx-4">
            <h3 className="text-2xl font-bold mb-4">
              {convincingMessages[popupStage].title}
            </h3>
            <p className="mb-6">{convincingMessages[popupStage].message}</p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleConvincingResponse(true)}
                className="flex-1 bg-emerald-600 text-white py-3 rounded-lg"
              >
                {convincingMessages[popupStage].action}
              </button>
              <button
                onClick={() => handleConvincingResponse(false)}
                className="flex-1 bg-gray-600 text-white py-3 rounded-lg"
              >
                {popupStage === 2 ? "No Thanks" : "Still Decline"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- Main Dashboard ----------
export default function UserDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("welcome");
  const [uploadedProducts, setUploadedProducts] = useState<any[]>([]);

  if (!user) return <div>Please login to access dashboard</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-8">
          {activeTab === "welcome" && (
            <div className="text-center py-16">
              <h1 className="text-4xl font-bold mb-4">
                Welcome, {user.name} 👋
              </h1>
              <p className="text-lg text-gray-600">
                Use the sidebar to upload a new device or view your uploaded
                products.
              </p>
            </div>
          )}
          {activeTab === "upload" && (
            <UploadFlow
              onProductUploaded={(product) =>
                setUploadedProducts((prev) => [...prev, product])
              }
            />
          )}
          {activeTab === "products" && (
            <UploadedProducts products={uploadedProducts} />
          )}
        </main>
      </div>
    </div>
  );
}
