import { useDrag, useDrop } from "react-dnd";

const DraggableItem = ({ item, moveWidget }: any) => {
  const [, drag] = useDrag({
    type: "WIDGET",
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (dropResult, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      if (delta) {
        moveWidget(item.id, delta.x, delta.y);
      }
    },
  });

  const [, drop] = useDrop({
    accept: "WIDGET",
  });

  return (
    <div
      //@ts-ignore
      ref={(node) => drag(drop(node))}
      className="absolute cursor-move"
      style={{ left: item.x, top: item.y }}
    >
      {item.content}
    </div>
  );
};

const DragAndDrop = ({ items, moveWidget }: any) => {
  return (
    <>
      {items.map((item: any) => (
        <DraggableItem key={item.id} item={item} moveWidget={moveWidget} />
      ))}
    </>
  );
};

export default DragAndDrop;

//move in palace
// import { useDrag, useDrop } from "react-dnd";

// const DraggableItem = ({ item, index, moveWidget }: any) => {
//   const [, drag] = useDrag({
//     type: "WIDGET",
//     item: { index },
//   });

//   const [, drop] = useDrop({
//     accept: "WIDGET",
//     hover: (draggedItem: any) => {
//       if (draggedItem.index !== index) {
//         moveWidget(draggedItem.index, index);
//         draggedItem.index = index;
//       }
//     },
//   });

//   return (
//     <div
//       //@ts-ignore
//       ref={(node) => drag(drop(node))}
//     >
//       {item.content}
//     </div>
//   );
// };

// const DragAndDrop = ({ items, moveWidget }: any) => {
//   return (
//     <div className="grid grid-cols-2 gap-4">
//       {items.map((item: any, index: number) => (
//         <DraggableItem
//           key={item.id}
//           index={index}
//           item={item}
//           moveWidget={moveWidget}
//         />
//       ))}
//     </div>
//   );
// };

// export default DragAndDrop;
