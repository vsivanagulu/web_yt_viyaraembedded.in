import { ReactNode } from 'react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  specs: string[];
  image: string;
  badge: string;
}

export interface Blog {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

export interface NavLink {
  name: string;
  id: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface Client {
  id: number;
  name: string;
  logo: string;
}