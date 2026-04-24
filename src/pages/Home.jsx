import React from "react";
import HeroSection from "../components/rsvp/HeroSection";
import EventDetails from "../components/rsvp/EventDetails";
import RSVPForm from "../components/rsvp/RSVPForm";
import GuestAlmanac from "../components/rsvp/GuestAlmanac";
import FooterSection from "../components/rsvp/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body">
      <HeroSection />
      <EventDetails />
      <RSVPForm />
      <GuestAlmanac />
      <FooterSection />
    </div>
  );
}