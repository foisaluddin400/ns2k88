"use client";
import { Navigate } from "@/components/Navigate";
import React from "react";

const Imprint = () => {
  return (
    <div className=" -mt-20 -mb-20">
      <Navigate></Navigate>
      <div className="">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Imprint (Impressum)
        </h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Company Name & Legal Form
            </h2>
            <p>MYTRAINERR GmbH</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Company Address
            </h2>
            <p>
              Musterstrasse 123 <br />
              10115 Berlin <br />
              Germany
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Contact
            </h2>
            <p>
              Email:{" "}
              <a
                href="mailto:contact@mytrainerr.app"
                className="text-blue-600 hover:underline"
              >
                contact@mytrainerr.app
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+491234567890"
                className="text-blue-600 hover:underline"
              >
                +49 123 4567890
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Represented By
            </h2>
            <p>Max Doe, CEO</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Commercial Register
            </h2>
            <p>
              Charlottenburg District Court <br />
              HRB 123456 B
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              VAT Identification Number
            </h2>
            <p>VAT ID: DE123456789</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
