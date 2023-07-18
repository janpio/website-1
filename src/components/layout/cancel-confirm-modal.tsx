"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";

interface CancelConfirmModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  reset: () => void;
  isDirty: boolean;
}

export default function CancelConfirmModal({
  show,
  setShow,
  reset,
  isDirty,
}: CancelConfirmModalProps) {
  return (
    <AlertDialog open={show} onOpenChange={setShow}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="mr-4 text-destructive hover:text-destructive"
          type="reset"
          disabled={!isDirty}
        >
          Cancel
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure to discard the changes?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={reset}>Yes</AlertDialogCancel>
          <AlertDialogAction>No</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
