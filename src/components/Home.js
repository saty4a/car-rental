import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  DatePicker,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";

const HomePage = () => {
  return (
    <div className="home-page-container flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-around rounded-none lg:rounded-[40px] w-full py-5 lg:py-0">
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <h1 className="text-center text-2xl lg:text-7xl text-white">Experience the road like never before</h1>
        <Button className="bg-[#FF9E0C] text-white mt-3">View All Cars</Button>
      </div>
      <div className="w-full lg:w-[416px] px-5 lg:px-0">
        <Card className="max-w-[416px] p-5">
            <CardHeader className="justify-center text-2xl">Book Your Car</CardHeader>
          <CardBody className="flex flex-col gap-5 color-black">
            <Dropdown>
              <DropdownTrigger>
                <Input type="text" label="Car Type" />
              </DropdownTrigger>
              <DropdownMenu aria-label="Link Actions">
                <DropdownItem key="home" href="/home">
                  Home
                </DropdownItem>
                <DropdownItem key="about" href="/about">
                  About
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Input type="text" label="Place of rental" className="color-black" />
            <Input type="text" label="Place of rental" />
            <DatePicker label="Rental Date" className="" />
            <DatePicker label="Return Date" className="" />
          </CardBody>
          <CardFooter>
            <Button className="w-full bg-[#FF9E0C] text-white">Book Now</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
