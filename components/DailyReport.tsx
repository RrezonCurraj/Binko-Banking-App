import React from "react";
import { z } from "zod";
import { AuthformSchema } from "@/lib/utils";

interface DailyReportProps {
  data: z.infer<typeof AuthformSchema>[];
}

const DailyReport = ({ data }: DailyReportProps) => {
  const paidCount = data.filter((item) => item.paymentStatus === "paid").length;
  const unpaidCount = data.filter(
    (item) => item.paymentStatus === "unpaid"
  ).length;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-24 font-semibold text-gray-900 mb-4">Daily Report</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="text-16 font-medium text-green-700">Paid</h3>
          <p className="text-24 font-bold text-green-900">{paidCount}</p>
        </div>

        <div className="p-4 bg-red-50 rounded-lg">
          <h3 className="text-16 font-medium text-red-700">Unpaid</h3>
          <p className="text-24 font-bold text-red-900">{unpaidCount}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-18 font-semibold text-gray-900 mb-3">Details</h3>
        <div className="space-y-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="text-14 font-medium text-gray-900">
                  {item.email}
                </p>
                <p className="text-12 text-gray-500">
                  Status: {item.paymentStatus}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-12 font-medium ${
                  item.paymentStatus === "paid"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {item.paymentStatus}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyReport;
