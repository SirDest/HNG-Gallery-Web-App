import React, { useState } from "react";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";
import img4 from "./Images/img4.jpg";
import img5 from "./Images/img5.jpg";
import img6 from "./Images/img6.jpg";
import img7 from "./Images/img7.jpg";
import img8 from "./Images/img8.jpg";
import img9 from "./Images/img9.jpg";
import img10 from "./Images/img10.jpg";
import img11 from "./Images/img11.jpg";
import img12 from "./Images/img12.jpg";
import img13 from "./Images/img13.jpg";
import img14 from "./Images/img14.jpg";
import img15 from "./Images/img15.jpg";

import {
  DndContext,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Images = () => {
  const imagesDet = [
    {
      id: 1,
      image: img1,
      text: "Image1",
    },
    {
      id: 2,
      image: img2,
      text: "Image2",
    },
    {
      id: 3,
      image: img3,
      text: "Image3",
    },
    {
      id: 4,
      image: img4,
      text: "Image4",
    },
    {
      id: 5,
      image: img5,
      text: "Image5",
    },
    {
      id: 6,
      image: img6,
      text: "Image6",
    },
    {
      id: 7,
      image: img7,
      text: "Image7",
    },
    {
      id: 8,
      image: img8,
      text: "Image8",
    },
    {
      id: 9,
      image: img9,
      text: "Image9",
    },
    {
      id: 10,
      image: img10,
      text: "Image10",
    },
    {
      id: 11,
      image: img11,
      text: "Image11",
    },
    {
      id: 12,
      image: img12,
      text: "Image12",
    },
    {
      id: 13,
      image: img13,
      text: "Image13",
    },
    {
      id: 14,
      image: img14,
      text: "Image14",
    },
    {
      id: 15,
      image: img15,
      text: "Image15",
    },
  ];
  const [img, setImg] = useState(imagesDet);
  const onDragEnd = (e) => {
    const { active, over } = e;
    if (active.id === over.id) {
      return;
    }
    setImg((items) => {
      const oldIndex = img.findIndex((items) => items.id === active.id);
      const newIndex = img.findIndex((items) => items.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };
  const SortableUser = ({ items }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: items.id });
    const style = {
      transition,
      transform: CSS.Transform.toString(transform),
    };
    return (
      <div
        style={style}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className="h-[350px] border-1 border-red-600 bg-gray-300 flex flex-col"
      >
        <img
          src={items.image}
          alt={items.text}
          className="object-cover h-[300px] w-full"
        />
        <p className="text-center m-auto">{items.text}</p>
      </div>
    );
  };
  const mouse = useSensor(MouseSensor),
    touch = useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    });
  const sensors = useSensor(mouse, touch);

  return (
    <div className="grid gap-2 container w-full h-fit p-10 m-auto lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3">
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}
        sensors={sensors}
      >
        <SortableContext
          items={imagesDet}
          strategy={verticalListSortingStrategy}
        >
          {img.map((items) => (
            <SortableUser key={items.id} items={items} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Images;
