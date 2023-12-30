"use client";

import React, {useState} from 'react';

import { NAV_ITEMS, SERVICES_DATA } from '@/constants';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';



interface MobileNavItemWithDropdownProps {
    navItem: typeof NAV_ITEMS[number];
    isDropdownVisible: boolean;
    toggleDropdownVisibility: () => void;
}

const MobileNavItemWithDropdown: React.FC<MobileNavItemWithDropdownProps> = ({navItem, isDropdownVisible, toggleDropdownVisibility}) => {
    return (
      <Button
      onClick={toggleDropdownVisibility}
      className={` w-full block`}
      >
      <span className="flex items-center gap-1 justify-between">
        {navItem.label}
        <ChevronRight />
      </span>
    </Button>
    );


 
};

export default MobileNavItemWithDropdown;
