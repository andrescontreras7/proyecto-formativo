import React, { useState } from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { GoBell } from "react-icons/go";
import NavMenu from "./menu";
const Navbars = () => {


    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
    const menuItems = [
      "Profile",
      "Dashboard",
      "Activity",
      "Analytics",
      "System",
      "Deployments",
      "My Settings",
      "Team Settings",
      "Help & Feedback",
      "Log Out",
    ];
  
    return (
      <Navbar isBordered className='h-[6vh] flex justify-end' onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        
        </NavbarContent>
  
        
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
            
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
            <GoBell className='text-xl hover:scale-105' />
            </Link>
          </NavbarItem>
         
          <NavMenu />
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
  }

export default Navbars;

