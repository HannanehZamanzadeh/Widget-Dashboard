import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/ui/resizable";
import { useTheme } from "styled-components";
import type { MyDefaultTheme } from "../components/globalStyles";
import { useEffect, useState } from "react";

const PriceCard = () => {
  const [price, setPrice] = useState<number | null>(null);
  const theme = useTheme() as MyDefaultTheme;
  useEffect(() => {
    const ws = new WebSocket("wss://api.gemini.com/v1/marketdata/BTCUSD");
    ws.onmessage = (event: any) => {
      const data = JSON.parse(event.data);
      setPrice(parseFloat(data.c)); //current price
    };
    ws.onerror = (error: any) => console.error("websocket error:", error);
    ws.onclose = () => console.log("websocket closed");
    return () => {
      if (ws.readyState === 1) {
        // <-- This is important
        ws.close();
      }
    };
  }, []);
  return (
    <div className=" h-16 text-center col-span-4 col-start-6">
      <>
        <ResizablePanelGroup
          direction="horizontal"
          style={{
            backgroundColor: theme.primary,
            color: theme.text,
          }}
        >
          <ResizablePanel className="py-4">BIT/USD price:</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel className="py-4">
            {price ? `$${price.toFixed(2)}` : "loading"}
          </ResizablePanel>
        </ResizablePanelGroup>
      </>
    </div>
  );
};

export default PriceCard;
