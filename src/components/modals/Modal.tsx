import { ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ModalProps {
    isOpen: boolean;
    onClose: (open: boolean) => void;
    title: string;
    description?: string;
    footer?: ReactNode;
    children: ReactNode;
}

const Modal = ({ isOpen, onClose, title, description, footer, children }: ModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-full max-w-md"> {/* Adjust max-w as needed */}
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>
                <div className="space-y-4">
                    {children}
                </div>
                <DialogFooter className="flex justify-end space-x-2">
                    {footer}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default Modal;