import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../react-query/hooks/use-platforms";
import usePlatform from "../react-query/hooks/use-platform";

type Props = {
  selectedPlatformId?: number;
  onSelectPlatform: (platform: number) => void;
};
const PlatformSelector = ({ selectedPlatformId, onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  const selectedPlatform = usePlatform(selectedPlatformId);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
