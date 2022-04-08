import React from "react";
import { AlertDialog, Button } from "native-base";

export default function AuthHelpPopup({ helpIsOpen, closeHelpDialog }) {
  return (
    <AlertDialog
      closeOnOverlayClick={true}
      isOpen={helpIsOpen}
      onClose={closeHelpDialog}
      c
    >
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>Why sign in?</AlertDialog.Header>
        <AlertDialog.Body>
          In order to protect your baby's data and to provide you the best
          experience possible, The Baby needs to associate an account with your
          device.
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button colorScheme="indigo" onPress={closeHelpDialog}>
            OK
          </Button>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
}
