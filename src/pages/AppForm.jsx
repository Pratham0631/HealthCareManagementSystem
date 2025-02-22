import React from "react";
import { useState } from "react";

const AppForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        date: "",
        time: "",
        medicalCondition: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your appointment request has been submitted successfully!");
        setFormData({ name: "", email: "", phone: "", address: "", date: "", time: "", medicalCondition: "" });
    };

    const generateTimeOptions = () => {
        const times = [];
        ["AM", "PM"].forEach((period) => {
            for (let hour = 1; hour <= 12; hour++) {
                times.push(`${hour}:00 ${period}`);
                times.push(`${hour}:30 ${period}`);
            }
        });
        return times;
    };

    return (
        <div className="flex mt-10 justify-center min-h-screen">
            <div className="w-full max-w-md p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-gray-700">Book an Appointment</h2>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Full Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Phone:</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Address:</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} required className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Preferred Date:</label>
                            <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Preferred Time:</label>
                            <select name="time" value={formData.time} onChange={handleChange} required className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option value="">Select Time</option>
                                {generateTimeOptions().map((time) => (
                                    <option key={time} value={time}>{time}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <label className="block mt-3 text-sm font-medium text-gray-600">Medical Condition:</label>
                    <textarea name="medicalCondition" value={formData.medicalCondition} onChange={handleChange} rows="4" className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"></textarea>

                    <button type="submit" className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-lg hover:bg-green-600">Submit</button>
                </form>
            </div>
        </div>
  );
};

export default AppForm;
