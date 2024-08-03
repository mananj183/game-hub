import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const sortOptionsMap: { [key: string]: string } = {
    name: "Name",
    released: "Release Date",
    created: "Date Added",
    metacritic: "Average Rating",
    rating: "Popularity",
  };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:
      </MenuButton>
      <MenuList>
        {Object.keys(sortOptionsMap).map((key) => (
          <MenuItem>{sortOptionsMap[key]}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
