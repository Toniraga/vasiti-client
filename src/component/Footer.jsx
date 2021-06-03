import React from 'react';
import Facebook from '../assets/images/facebook.svg';
import PhoneImg from '../assets/images/footer-phone.svg';
import HurrahImg from '../assets/images/hurray.svg';
import Instagram from '../assets/images/instagram.svg';
import Linkdin from '../assets/images/linkdin.svg';
import Twitter from '../assets/images/twitter.svg';

const Footer = () => {
	return (
		<div className="w-full mt-20 h-auto p-2 md:p-6 pb-20 bg-black items-center text-white">
			<div className="mx-2 md:mx-16 items-center">
				<div className="flex flex-col-reverse md:flex-row justify-between">
					<img
						className="mt-4 ml-4 md:-mt-8 md:-mt-12"
						src={PhoneImg}
						alt="img"
					/>
					<div className="md:ml-20">
						<div className="text-white font-bold text-2xl md:text-3xl pt-2 flex">
							Be a member <br /> of our community
							<span>
								<img className="w-7 h-7 mt-10 ml-2" src={HurrahImg} alt="img" />
							</span>
						</div>
						<p className="pt-2 text-xs">
							We'd make sure you're always first to know what's happening on
							Vasiti-thus, the world.
						</p>
						<div className="mt-6">
							<input
								className="border border-gray-400 bg-vasiti-gray rounded w-full py-2 z-10 text-white"
								type="text"
								placeholder=""
							/>
							<button
								className="bg-white mt-1 h-8 px-3 font-bold rounded text-black font-normal absolute -ml-28"
								type="button"
							>
								SUBSCRIBE
							</button>
						</div>
					</div>
				</div>
				<div className="pt-6 pb-5 md:pt-1 flex flex-col md:flex-row justify-between md: flex-wrap">
					<div className="">
						<div className="py-3 text-xs font-bold">Company</div>
						<div className="py-2 text-xs">About Us</div>
						<div className="py-2 text-xs">Term of Use</div>
						<div className="py-2 text-xs">Privacy Policy</div>
						<div className="py-2 text-xs">Press & Media</div>
					</div>
					<div className="">
						<div className="py-3 text-xs font-bold">Products</div>
						<div className="py-2 text-xs">Marketplace</div>
						<div className="py-2 text-xs">Magazine</div>
						<div className="py-2 text-xs">Seller</div>
						<div className="py-2 text-xs">Wholesale</div>
						<div className="py-2 text-xs">Services</div>
					</div>
					<div className="pt-2 md:pt-0">
						<div className="py-3 text-xs font-bold">Careers</div>
						<div className="py-2 text-xs">Become a campus Rep</div>
						<div className="py-2 text-xs">Become a Vasiti Influencer</div>
						<div className="py-2 text-xs">Become a Campus writer</div>
						<div className="py-2 text-xs">Become an Affiliate</div>
					</div>
					<div className="pt-2 md:pt-0">
						<div className="py-3 text-xs font-bold">Get in touch</div>
						<div className="py-2 text-xs">Contact Us</div>
						<div className="py-2 text-xs">Partner with us</div>
						<div className="py-2 text-xs">Advertise with us</div>
						<div className="py-2 text-xs">Help/FAQs</div>
					</div>
					<div className="pt-2 md:pt-1">
						<div className="font-bold text-xs">Join our community</div>
						<div className="flex py-4">
							<div className="bg-white w-5 h-5 rounded-full">
								<img className="ml-1.5 pt-1 w-2" src={Facebook} alt="img" />
							</div>
							<div className="bg-white w-5 h-5 rounded-full ml-2">
								<img className="ml-1.5 pt-1.5 w-2" src={Instagram} alt="img" />
							</div>
							<div className="bg-white w-5 h-5 rounded-full ml-2">
								<img className="ml-1.5 pt-1.5 w-2" src={Twitter} alt="img" />
							</div>
							<div className="bg-white w-5 h-5 rounded-full ml-2">
								<img className="ml-1.5 pt-1.5 w-2" src={Linkdin} alt="img" />
							</div>
						</div>
						<div className="">Email Newsletter</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
