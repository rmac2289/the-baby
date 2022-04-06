import {
  Modal,
  ScrollView,
  Stack,
  FormControl,
  HStack,
  Checkbox,
  Button,
  Center,
  VStack,
  Input,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { headerColor, indigo } from "../utils/cssVars";
export default function AddActivityModal({ modalVisible, setModalVisible }) {
  let size = "xl";
  const handleClick = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
        <Modal.Content h="400">
          <Modal.CloseButton></Modal.CloseButton>

          <Modal.Header>Add Activity</Modal.Header>
          <Modal.Body>
            <ScrollView>
              <FormControl isRequired>
                <Stack mx="4">
                  <FormControl.Label>Title</FormControl.Label>
                  <Input type="text" defaultValue="" />
                  <FormControl.HelperText>
                    Type in activity name.
                  </FormControl.HelperText>
                </Stack>
              </FormControl>
              <FormControl marginTop={3}>
                <Stack mx="4" space={4}>
                  <HStack space={4}>
                    <MaterialIcons name="timer" size={24} color={indigo[900]} />
                    <Checkbox
                      shadow={2}
                      value="test"
                      accessibilityLabel="This is a dummy checkbox"
                    >
                      Requires a timer
                    </Checkbox>
                  </HStack>
                  <HStack space={4}>
                    <MaterialCommunityIcons
                      name="spoon-sugar"
                      size={24}
                      color={indigo[900]}
                      style={{ transform: [{ translateX: 2 }] }}
                    />
                    <Checkbox
                      shadow={2}
                      value="test"
                      accessibilityLabel="This is a dummy checkbox"
                    >
                      Requires an amount
                    </Checkbox>
                  </HStack>
                </Stack>
              </FormControl>
            </ScrollView>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="red"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Cancel
              </Button>
              <Button
                bg={indigo[900]}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Center>
        <VStack space={4}>
          <Button
            onPress={() => handleClick()}
            key={size}
          >{`Open ${size} Modal`}</Button>
        </VStack>
      </Center>
    </>
  );
}
