"use client";

import { Upload } from "antd";
import { useState } from "react";
import { Trash2, UploadCloud } from "lucide-react";
import CertifcateIcon from "@/app/coach/coachDetails/CertifcateIcon";

const Step4Certification = ({ onNext }) => {
  const [certName, setCertName] = useState("");
  const [certFile, setCertFile] = useState(null);
  const [certList, setCertList] = useState([]);

  const addCertification = () => {
    if (!certName) return;

    setCertList([...certList, { name: certName }]);
    setCertName("");
    setCertFile(null);
  };

  const deleteCertification = (index) => {
    setCertList(certList.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-xl font-bold italic">Certification & Organic</h2>
        <p className="text-sm text-gray-500">
          Present your qualifications and connect you with clients.
        </p>
      </div>

      {/* Certification Name */}
      <div>
        <label className="block text-sm mb-1">Certification name</label>
        <input
          className="w-full border p-3 rounded-xl"
          placeholder="e.g. Peak Fit Gym"
          value={certName}
          onChange={(e) => setCertName(e.target.value)}
        />
      </div>

      {/* Certification Image */}
      <div>
        <label className="block text-sm mb-2">Certification image</label>
        <Upload
          beforeUpload={(file) => {
            setCertFile(file);
            return false;
          }}
          accept=".pdf,.jpg,.jpeg,.png"
          maxCount={1}
        >
          <div className="border-2 border-dashed border-teal-500 rounded-xl p-8 text-center cursor-pointer hover:bg-gray-50">
            <UploadCloud className="mx-auto mb-2 text-gray-400" />
            <p className="text-sm font-medium">
              Tap to upload or drag files here
            </p>
            <p className="text-xs text-gray-400 mt-1">
              PDF, JPG, PNG, max. 8 MB
            </p>
          </div>
        </Upload>
      </div>

      {/* Certification List */}
      <div className="space-y-3">
        {certList.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white px-4 py-3 rounded-xl"
          >
            <div className="flex items-center gap-2">
              <CertifcateIcon></CertifcateIcon>
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            <button
              onClick={() => deleteCertification(index)}
              className="text-gray-400 hover:text-red-500"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      {/* Add Button */}
      <button
        onClick={addCertification}
        className="w-full bg-gray-100 py-3 rounded-xl font-medium hover:bg-gray-200"
      >
        + Add This Certification
      </button>

      {/* Actions */}
      <button
        onClick={onNext}
        className="w-full bg-teal-700 text-white py-3 rounded-full"
      >
        Continue
      </button>

      <button
        onClick={onNext}
        className="w-full text-sm text-gray-500"
      >
        skip
      </button>
    </div>
  );
};

export default Step4Certification;
