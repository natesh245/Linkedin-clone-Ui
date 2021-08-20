import "./EditIntro.css";
import LabeledInput from "../../../Input/LabeledInput/LabeledInput";
import LabeledDropDown from "../../../Input/LabeledDropDown/LabeledDropDown";

const industryOptions = [
  "Choose an industry…",
  "Accounting",
  "Airlines/Aviation",
  "Alternative Dispute Resolution",
  "Alternative Medicine",
  "Animation",
  "Apparel & Fashion",
  "Architecture & Planning",
  "Arts & Crafts",
  "Automotive",
  "Aviation & Aerospace",
  "Banking",
  "Biotechnology",
  "Broadcast Media",
  "Building Materials",
  "Business Supplies & Equipment",
  "Capital Markets",
  "Chemicals",
  "Civic & Social Organization",
  "Civil Engineering",
  "Commercial Real Estate",
  "Computer & Network Security",
  "Computer Games",
  "Computer Hardware",
  "Computer Networking",
  "Computer Software",
  "Construction",
  "Consumer Electronics",
  "Consumer Goods",
  "Consumer Services",
  "Cosmetics",
  "Dairy",
  "Defense & Space",
  "Design",
  "E-learning",
  "Education Management",
  "Electrical & Electronic Manufacturing",
  "Entertainment",
  "Environmental Services",
  "Events Services",
  "Executive Office",
  "Facilities Services",
  "Farming",
  "Financial Services",
  "Fine Art",
  "Fishery",
  "Food & Beverages",
  "Food Production",
  "Fundraising",
  "Furniture",
  "Gambling & Casinos",
  "Glass, Ceramics & Concrete",
  "Government Administration",
  "Government Relations",
  "Graphic Design",
  "Health, Wellness & Fitness",
  "Higher Education",
  "Hospital & Health Care",
  "Hospitality",
  "Human Resources",
  "Import & Export",
  "Individual & Family Services",
  "Industrial Automation",
  "Information Services",
  "Information Technology & Services",
  "Insurance",
  "International Affairs",
  "International Trade & Development",
  "Internet",
  "Investment Banking",
  "Investment Management",
  "Judiciary",
  "Law Enforcement",
  "Law Practice",
  "Legal Services",
  "Legislative Office",
  "Leisure, Travel & Tourism",
  "Libraries",
  "Logistics & Supply Chain",
  "Luxury Goods & Jewelry",
  "Machinery",
  "Management Consulting",
  "Maritime",
  "Market Research",
  "Marketing & Advertising",
  "Mechanical Or Industrial Engineering",
  "Media Production",
  "Medical Device",
  "Medical Practice",
  "Mental Health Care",
  "Military",
  "Mining & Metals",
  "Mobile Games",
  "Motion Pictures & Film",
  "Museums & Institutions",
  "Music",
  "Nanotechnology",
  "Newspapers",
  "Non-profit Organization Management",
  "Oil & Energy",
  "Online Media",
  "Outsourcing/Offshoring",
  "Package/Freight Delivery",
  "Packaging & Containers",
  "Paper & Forest Products",
  "Performing Arts",
  "Pharmaceuticals",
  "Philanthropy",
  "Photography",
  "Plastics",
  "Political Organization",
  "Primary/Secondary Education",
  "Printing",
  "Professional Training & Coaching",
  "Program Development",
  "Public Policy",
  "Public Relations & Communications",
  "Public Safety",
  "Publishing",
  "Railroad Manufacture",
  "Ranching",
  "Real Estate",
  "Recreational Facilities & Services",
  "Religious Institutions",
  "Renewables & Environment",
  "Research",
  "Restaurants",
  "Retail",
  "Security & Investigations",
  "Semiconductors",
  "Shipbuilding",
  "Sporting Goods",
  "Sports",
  "Staffing & Recruiting",
  "Supermarkets",
  "Telecommunications",
  "Textiles",
  "Think Tanks",
  "Tobacco",
  "Translation & Localization",
  "Transportation/Trucking/Railroad",
  "Utilities",
  "Venture Capital & Private Equity",
  "Veterinary",
  "Warehousing",
  "Wholesale",
  "Wine & Spirits",
  "Wireless",
  "Writing & Editing",
];

function EditIntro() {
  return (
    <div className="edit-intro">
      <LabeledInput
        value=""
        onChange={null}
        label="First Name"
        isRequired={true}
      />
      <LabeledInput
        value=""
        onChange={null}
        label="Last Name"
        isRequired={true}
      />

      <div className="headline">
        <label htmlFor="headline-input">Headline *</label>
        <textarea id="headline-input" rows="1" cols="60"></textarea>
      </div>
      <LabeledInput
        value=""
        onChange={null}
        label="Current Position"
        isRequired={true}
      />
      <LabeledInput
        value=""
        onChange={null}
        label="Education"
        isRequired={true}
      />
      <LabeledInput
        value=""
        onChange={null}
        label="Country/ Region"
        isRequired={true}
      />
      <LabeledInput
        value=""
        onChange={null}
        label="Location in this country/Region"
        isRequired={true}
      />

      <LabeledDropDown
        value=""
        onChange={null}
        label="Industry"
        options={industryOptions}
      />
    </div>
  );
}

export default EditIntro;
