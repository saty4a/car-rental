import Image from "next/image";

const BenifitSection = () => {

    const benifitData = [
        {
            image: "/benifitSectionlocation.png",
            altText: "location",
            label: "Availability",
            desc: "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis"
        },
        {
            image: "/benifitSectioncar.png",
            altText: "car",
            label: "Comfort",
            desc: "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis"
        },
        {
            image: "/benifitSectionwallet.png",
            altText: "wallet",
            label: "Savings",
            desc: "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis"
        },
    ];


    return(
        <div className="flex flex-col lg:flex-row mx-5 lg:mx-0 justify-between my-5">
            {benifitData && benifitData.map((data, index) => (<div key={index} className="flex flex-col items-center gap-5">
                    <Image src={data.image} alt={data.altText} width={50} height={50} />
                    <h3 className="font-bold text-xl">{data.label}</h3>
                    <p className="text-center">{data.desc}</p>
                </div>)
            )}
        </div>
    )
}

export default BenifitSection;
