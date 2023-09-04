"use client"
import Script from "next/script";
export default function Location() {
  return (
    <div>
      <Script src="location.js" />
      This is my Location
      <p>
        This is the Find location function using Plain javascript and using
        script tag in the next js setup
      </p>
    </div>
  );
}
