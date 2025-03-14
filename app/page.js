"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { redirect } from "next/navigation";
export default function Home() {
  redirect("/home");
  return <div>{/* {<Navbar></Navbar>} */}</div>;
}
