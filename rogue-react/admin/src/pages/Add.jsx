import React, { useState } from "react";
import { addProduct } from "../api";

const Add = () => {
  const [sizeChart, setSizeChart] = useState([{ ref: "", label: "", XXS: 0, XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 }]);
  const [sizesInfo, setSizesInfo] = useState([{ size: "", actualPrice: 0, discountPrice: 0, offer: 0 }]);
  const [formData, setFormData] = useState({
    name: "",
    shortDescription: "",
    description: "",
    category: "",
    bestseller: false,
    offer: 0,
  });

  const handleSizeChartChange = (index, field, value) => {
    const updatedSizeChart = [...sizeChart];
    updatedSizeChart[index][field] = value;
    setSizeChart(updatedSizeChart);
  };

  const addSizeChartRow = () => {
    setSizeChart([...sizeChart, { ref: "", label: "", XXS: 0, XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 }]);
  };

  const handleSizesInfoChange = (index, field, value) => {
    const updatedSizesInfo = [...sizesInfo];
    updatedSizesInfo[index][field] = value;
    setSizesInfo(updatedSizesInfo);
  };

  const addSizesInfoRow = () => {
    setSizesInfo([...sizesInfo, { size: "", actualPrice: 0, discountPrice: 0, offer: 0 }]);
  };

  const [rotateImg, setRotateImg] = useState(null);
  const [image, setImage] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

   const handleFileChange = (e) => {
     const files = Array.from(e.target.files);
     if (e.target.name === "rotateImg") {
       setRotateImg(files[0]);
     } else {
       setImage(files);
     }
   };

 // const handleFileChange = (e) => {
  //  const { name, files } = e.target;
    
 //   if (name === "rotateImg") {
  //    setRotateImg(files[0]);
  //  } else if (name === "image") {
  //    setImage((prevImages) => [...prevImages, ...Array.from(files)]);
  //  }
 // };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append form data
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    // Append sizeChart and sizesInfo as JSON strings
    data.append("sizeChart", JSON.stringify(sizeChart));
    data.append("sizesInfo", JSON.stringify(sizesInfo));

    // Append files
    if (rotateImg) data.append("rotateImg", rotateImg);
    image.forEach((file) => data.append("image", file));

    try {
      await addProduct(data);
      alert("Product added successfully!");
    } catch (error) {
      alert("Error adding product");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Add Product</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {["name", "shortDescription", "description", "category", "offer"].map((field) => (
            <div key={field} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
              <input
                type="text"
                name={field}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              />
            </div>
          ))}

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="bestseller"
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="block text-sm font-medium text-gray-700">Bestseller</label>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Size Chart</label>
            {sizeChart.map((row, index) => (
              <div key={index} className="grid grid-cols-10 gap-2">
                <input
                  type="text"
                  placeholder="Ref"
                  value={row.ref}
                  onChange={(e) => handleSizeChartChange(index, "ref", e.target.value)}
                  className="col-span-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Label"
                  value={row.label}
                  onChange={(e) => handleSizeChartChange(index, "label", e.target.value)}
                  className="col-span-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                {["XXS", "XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <input
                    key={size}
                    type="number"
                    placeholder={size}
                    value={row[size]}
                    onChange={(e) => handleSizeChartChange(index, size, parseInt(e.target.value) || 0)}
                    className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                ))}
              </div>
            ))}
            <button
              type="button"
              onClick={addSizeChartRow}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
            >
              + Add Row
            </button>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Sizes Info</label>
            {sizesInfo.map((row, index) => (
              <div key={index} className="grid grid-cols-4 gap-2">
                <input
                  type="text"
                  placeholder="Size"
                  value={row.size}
                  onChange={(e) => handleSizesInfoChange(index, "size", e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Actual Price"
                  value={row.actualPrice}
                  onChange={(e) => handleSizesInfoChange(index, "actualPrice", parseFloat(e.target.value) || 0)}
                  className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Discount Price"
                  value={row.discountPrice}
                  onChange={(e) => handleSizesInfoChange(index, "discountPrice", parseFloat(e.target.value) || 0)}
                  className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Offer %"
                  value={row.offer}
                  onChange={(e) => handleSizesInfoChange(index, "offer", parseFloat(e.target.value) || 0)}
                  className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addSizesInfoRow}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
            >
              + Add Row
            </button>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Rotate Image</label>
            <input
              type="file"
              name="rotateImg"
              onChange={handleFileChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Product Images</label>
            <input
              type="file"
              name="images"
              multiple
              onChange={handleFileChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;