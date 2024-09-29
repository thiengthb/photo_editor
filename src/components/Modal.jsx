"use client"

import * as fabric from "fabric";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Card, Image } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useCanvasContext } from "@/context/CanvasContext";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [previewImage, setPreviewImage] = useState(null);
  const [file, setFile] = useState(null);

  const { canvas } = useCanvasContext();
 
  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = (event) => {
      setPreviewImage(event.target.result); 
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleAddImageToCanvas = () => {
    if (!file || !canvas) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const imgObj = new window.Image();  // Standard window.Image object
      imgObj.src = event.target.result;
      imgObj.onload = () => {
        const img = new fabric.Image(imgObj);
        img.scale(0.2);
        img.set({
            cornerColor: "black",
            cornerStyle: 'circle',
            cornerStrokeColor: "black",
            borderDashArray: [5, 5],
            borderColor: '#000000',
            transparentCorners: true,
            padding: 10,
            hasControls: true,
            hasBorders: true,
        });
        canvas.add(img); 
        canvas.renderAll();
      };
    };
    reader.readAsDataURL(file);
    onOpenChange(); 
  };

  return (
    <>
        <Button 
            isIconOnly
            radius="full"
            onPress={onOpen}
        >
            <FontAwesomeIcon icon={faImage} />
        </Button>

        <Modal 
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            className="w-[440px]"
        >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">
                    Upload and Preview Image
                    <Button
                        isIconOnly
                        radius="full"
                        onPress={() => {setPreviewImage(null); handleAddImageToCanvas(); onClose();}}    
                        className="absolute top-2 right-2"
                        variant="faded"
                    >
                        <FontAwesomeIcon icon={faX} />
                    </Button>
                </ModalHeader>
                <ModalBody>
                    <Card>
                    {previewImage ? (
                        <Image
                            width={400}
                            src={previewImage} 
                            alt="Preview"
                        />
                    ) : (
                        <Image
                            height={200}
                            width={400}
                            src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
                            fallbackSrc="https://via.placeholder.com/400x200"
                            alt="Fallback image"
                        />
                    )}
                    </Card>
                </ModalBody>
                <ModalFooter className="flex flex-col">
                    <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
                    <div className="flex w-full justify-end gap-2">
                    <Button 
                        color="success" 
                        onPress={() => {setPreviewImage(null); handleAddImageToCanvas(); onClose();}}
                    >
                        Upload
                    </Button>
                    </div>
                </ModalFooter>
                </>
            )}
            </ModalContent>
      </Modal>
    </>
  );
}
