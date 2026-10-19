// src/lib/iconMap.ts
import React from "react";
import Apartment from "@mui/icons-material/Apartment";
import EmojiEvents from "@mui/icons-material/EmojiEvents";
import Groups from "@mui/icons-material/Groups";
import Handshake from "@mui/icons-material/Handshake";
import Schedule from "@mui/icons-material/Schedule";
import Sell from "@mui/icons-material/Sell";
import Verified from "@mui/icons-material/Verified";
import Work from "@mui/icons-material/Work";
export const benefitIcons: Record<number, JSX.Element> = {
  1: React.createElement(Verified, { sx: { fontSize: 24 } }),
  2: React.createElement(EmojiEvents, { sx: { fontSize: 24 } }),
  3: React.createElement(Sell, { sx: { fontSize: 24 } }),
  4: React.createElement(Apartment, { sx: { fontSize: 24 } }),
  5: React.createElement(Groups, { sx: { fontSize: 24 } }),
  6: React.createElement(Schedule, { sx: { fontSize: 24 } }),
  7: React.createElement(Handshake, { sx: { fontSize: 24 } }),
  8: React.createElement(Work, { sx: { fontSize: 24 } }),
};
