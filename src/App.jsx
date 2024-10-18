import "./App.css";
function Form() {
  return (
    <>
      <div>
        <form className="font-albert flex flex-col items-start text-black bg-white p-10 rounded-xl">
          <p className="font-robo pb-[21px] text-[#273b3c] text-2xl font-bold">
            Contact Us
          </p>
          {/* Full name */}
          <div className="flex gap-4">
            <div className="flex flex-col items-start">
              <label className="text-xs font-medium tracking-wide pb-[10px]">
                First Name <span className="pl-[4px] text-green-600">*</span>
              </label>
              <input
                className="pr-28 pl-[10px] py-[10px] text-xs font-medium tracking-wide bg-white border-2 rounded-lg"
                type="text"
                required
              />
            </div>
            {/* Last Name */}
            <div className="flex flex-col items-start">
              <label className="text-xs font-medium tracking-wide pb-[10px]">
                Last Name <span className="pl-[4px] text-green-600">*</span>
              </label>
              <input
                className="pr-28 pl-[10px] py-[10px] text-xs font-medium tracking-wide bg-white border-2 rounded-lg"
                type="text"
                required
              />
            </div>
          </div>
          {/* Email Address */}
          <div className="flex flex-col items-start">
            <label className="text-xs font-medium tracking-wide pb-[10px] pt-[21px]">
              Email Address <span className="pl-[4px] text-green-600">*</span>
            </label>
            <input
              className="pr-[405px] pl-[15px] py-[10px] text-xs font-medium tracking-wide bg-white border-2 rounded-lg"
              type="email"
              required
            />
          </div>
          {/* Select Box */}
          <p className=" flex text-xs font-medium tracking-wide pb-[10px] pt-[21px]">
            Query Type <span className="pl-[10px] text-green-600">*</span>
          </p>
          {/* Query Type */}
          <div className="flex gap-4">
            {/* General Enquiry */}
            <div className="pr-[145px] pl-[20px] py-[10px] flex items-center gap-2 text-xs font-medium tracking-wide bg-white border-2 rounded-lg">
              <input
                type="radio"
                id="generalEnquiry"
                name="queryType"
                value="General Enquiry"
                className="text-white"
              />
              <label
                className="text-xs font-medium tracking-wide"
                htmlFor="generalEnquiry"
              >
                General Enquiry
              </label>
            </div>
            {/* Support Request */}
            <div className="pr-[140px] pl-[20px] py-[10px] flex items-center gap-2 text-xs font-medium tracking-wide bg-white border-2 rounded-lg">
              <input
                type="radio"
                id="supportRequest"
                name="queryType"
                value="Support Request"
              />
              <label
                className="text-xs font-medium tracking-wide"
                htmlFor="supportRequest"
              >
                Support Request
              </label>
            </div>
          </div>
          {/* Message */}
          <div className="flex flex-col items-start">
            <label className="text-xs font-medium tracking-wide pb-[10px] pt-[21px]">
              Message <span className="pl-[4px] text-green-600">*</span>
            </label>
            <textarea className="bg-white border-2 rounded-md w-[580px] pl-[10px]" name="message" id="message"></textarea>
          </div>
          {/* Consent */}
          <div className="flex flex-row gap-4">
            <input
              className="border-2 border-green-400"
              type="checkbox"
              id="consent"
              name="consent"
            />
            <label className="text-xs font-medium tracking-wide bg-white py-[29px] ">
              I consent to being contracted by the team{" "}
              <span className="pl-[4px] text-green-600">*</span>
            </label>
          </div>
          <div className="w-full">
            <button
              className="flex justify-center items-center w-full bg-[#0c7d69] text-xs tracking-wide text-white font-bold py-4"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Form;
