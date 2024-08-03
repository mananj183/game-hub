import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

type Props = {
  selectedSortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
};
const SortSelector = ({ selectedSortOrder, onSelectSortOrder }: Props) => {
  const sortOptions = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Release Date",
    },
    {
      value: "-added",
      label: "Date Added",
    },
    {
      value: "-metacritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: "Average Rating",
    },
  ];
  const currentSortOrder = sortOptions.find(
    (option) => option.value === selectedSortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOptions.map((optionMap) => (
          <MenuItem
            key={optionMap.value}
            onClick={() => onSelectSortOrder(optionMap.value)}
          >
            {optionMap.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
