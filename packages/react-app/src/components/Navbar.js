import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from './Navbar.style';
import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";
import React, { useEffect, useState } from "react";
import { Button } from "../components";
import { useLocation } from 'react-router-dom';
import BeVerified from './../assets/beverified-logo.png';

const Navbar = () => {
	let location = useLocation();
	console.log(location.pathname !== '');
	function WalletButton() {
		const [rendered, setRendered] = useState("");

		const ens = useLookupAddress();
		const { account, activateBrowserWallet, deactivate, error } = useEthers();

		useEffect(() => {
			if (ens) {
				setRendered(ens);
			} else if (account) {
				setRendered(shortenAddress(account));
			} else {
				setRendered("");
			}
		}, [account, ens, setRendered]);

		useEffect(() => {
			if (error) {
				console.error("Error while connecting wallet:", error.message);
			}
		}, [error]);

		return (
			<Button
				onClick={() => {
					if (!account) {
						activateBrowserWallet();
					} else {
						deactivate();
					}
				}}
			>
				{rendered === "" && "Connect Wallet"}
				{rendered !== "" && rendered}
			</Button>
		);
	}
	return (
		<div>
		{location.pathname !== '/' ? <Nav>
			{/* <Bars /> */}
			<NavMenu>
					<NavLink to='/'>
						<img style={{width:'250px'}} src={BeVerified} alt="logo"></img>
					</NavLink>
				{location.pathname !== "/register" ?
					<>
						<NavLink to='/addproduct'>
							addproduct
						</NavLink>
						<NavLink to='/allproductslist'>
							showproducts
						</NavLink>
					</> : null}
			</NavMenu>
			<NavBtn>
				<WalletButton />
			</NavBtn>
		</Nav> : null}


		</div>
	);
};

export default Navbar;
