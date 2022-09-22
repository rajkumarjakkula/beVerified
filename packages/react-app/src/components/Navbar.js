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
	<>
	<Nav>
		<Bars />
		<NavMenu>
		{location.pathname!=='/' && location.pathname!=="/register" ?
		<>
		<NavLink to='/register' >
			Register
		</NavLink>
		<NavLink to='/portal'>
			Portal
		</NavLink>
		<NavLink to='/sign-up'>
			Sign Up
		</NavLink></> : null}
		</NavMenu>
		<NavBtn>
		<WalletButton />
		</NavBtn>
	</Nav>
	
	</>
);
};

export default Navbar;
