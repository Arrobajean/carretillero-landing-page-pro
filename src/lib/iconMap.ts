// src/lib/iconMap.ts
import React from "react";
import {
  BadgeCheck,
  Award,
  Star,
  BookCheck,
  Users,
  Clock,
  HeartHandshake,
  Calendar,
} from "lucide-react";
export const benefitIcons: Record<number, JSX.Element> = {
  1: React.createElement(BadgeCheck, { className: "h-10 w-10" }),
  2: React.createElement(Award, { className: "h-10 w-10" }),
  3: React.createElement(Star, { className: "h-10 w-10" }),
  4: React.createElement(BookCheck, { className: "h-10 w-10" }),
  5: React.createElement(Users, { className: "h-10 w-10" }),
  6: React.createElement(Clock, { className: "h-10 w-10" }),
  7: React.createElement(HeartHandshake, { className: "h-10 w-10" }),
  8: React.createElement(Calendar, { className: "h-10 w-10" }),
};
