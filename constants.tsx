
import React from 'react';
import { Server, Layers, Smartphone, Zap } from 'lucide-react';
import { Service, Product, Blog, Testimonial, Client } from './types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Embedded Linux BSP Porting",
    description: "Complete Board Support Package development and customization for custom hardware, ensuring stability and performance optimization.",
    icon: <Server className="w-8 h-8 text-blue-400" />
  },
  {
    id: 2,
    title: "Yocto Project Development",
    description: "Expertise in creating custom, lightweight, and secure Linux distributions tailored specifically to your embedded device requirements.",
    icon: <Layers className="w-8 h-8 text-blue-400" />
  },
  {
    id: 3,
    title: "Android BSP Porting",
    description: "Seamless porting of Android OS to your custom hardware platforms, including driver development and HAL integration.",
    icon: <Smartphone className="w-8 h-8 text-blue-400" />
  },
  {
    id: 4,
    title: "Zephyr RTOS Development",
    description: "Real-time operating system development for resource-constrained devices, focusing on low power consumption and high reliability.",
    icon: <Zap className="w-8 h-8 text-blue-400" />
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'imx6',
    name: "Viyara i.MX6ULL SBC",
    tagline: "Industrial Grade Efficiency",
    specs: ["ARM Cortex-A7 @ 900MHz", "Low Power Consumption", "Industrial Temp Range", "Connectivity: CAN, UART, Ethernet"],
    image: "/images/viyara-imx6ull-g.webp",
    badge: "Best Seller"
  },
  {
    id: 'imx8mnano',
    name: "Viyara i.MX8M Nano SBC",
    tagline: "Cost-Effective Audio & Media",
    specs: ["Quad-core ARM Cortex-A53", "Cortex-M7 Real-time Core", "3D/2D GPU Acceleration", "Advanced Audio Interfaces"],
    image: "/images/ve-imx8mv2.webp",
    badge: "Featured"
  },
  {
    id: 'imx9',
    name: "Viyara i.MX9 AI Kit",
    tagline: "Next-Gen Edge Computing",
    specs: ["ARM Cortex-A55 + M33", "Dedicated NPU for ML", "High-Speed Interfaces", "Advanced Security Features"],
    image: "/images/viyara-imx9-g.webp",
    badge: "New Arrival"
  },
  {
    id: 'qcs6490',
    name: "Viyara QCS6490 SBC",
    tagline: "Premium AI & 5G Performance",
    specs: ["Qualcomm® QCS6490 Octa-core", "12 TOPS AI Engine", "5G Sub-6 & Wi-Fi 6E", "Triple ISP for Advanced Imaging", "Enterprise-Grade Lifecycle"],
    image: "/images/viyara-pico-imx7d-g.webp",
    badge: "Flagship"
  }
];

export const BLOGS: Blog[] = [
  {
    id: 1,
    title: "Optimizing Boot Time in Yocto",
    date: "Oct 12, 2024",
    excerpt: "Learn the essential techniques to shave seconds off your embedded Linux boot process using systemd analysis.",
    category: "Software"
  },
  {
    id: 2,
    title: "Why i.MX9 is the Future of Edge AI",
    date: "Nov 05, 2024",
    excerpt: "Exploring the neural processing capabilities of the new i.MX9 architecture and its applications in industrial automation.",
    category: "Hardware"
  },
  {
    id: 3,
    title: "Zephyr vs. FreeRTOS: A Comparison",
    date: "Nov 28, 2024",
    excerpt: "A deep dive into the pros and cons of the two most popular RTOS choices for modern IoT devices.",
    category: "Development"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Lead Hardware Engineer",
    company: "MedTech Innovations",
    content: "The custom Android BSP Viyara developed for our medical tablet was flawless. Their understanding of regulatory requirements and HAL integration saved us months of development time.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
  },
  {
    id: 2,
    name: "Michael Ross",
    role: "CTO",
    company: "Industrial IoT Solutions",
    content: "We switched to Viyara's i.MX6ULL SBC for our gateway products. The thermal performance and long-term support commitment were exactly what we needed for our industrial clients.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
  },
  {
    id: 3,
    name: "David Kumar",
    role: "Product Manager",
    company: "AgriSense",
    content: "Porting our legacy code to Zephyr RTOS seemed impossible until we brought Viyara on board. Their expertise in low-power optimization has significantly extended our device battery life.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
  }
];

export const CLIENTS: Client[] = [
  {
    id: 1,
    name: "SIGMA ADVANCED SYSTEMS",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Crect width='200' height='60' fill='none'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='14' fill='%2394a3b8'%3ESIGMA ADVANCED%3C/text%3E%3C/svg%3E"
  },
  {
    id: 2,
    name: "CAMBIUM NETWORKS",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Crect width='200' height='60' fill='none'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='14' fill='%2394a3b8'%3ECAMBIUM%3C/text%3E%3C/svg%3E"
  },
  {
    id: 3,
    name: "RETICULATE MICRO INC",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Crect width='200' height='60' fill='none'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='14' fill='%2394a3b8'%3ERETICULATE%3C/text%3E%3C/svg%3E"
  },
  {
    id: 4,
    name: "KWALI INC",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Crect width='200' height='60' fill='none'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%2394a3b8'%3EKWALI INC%3C/text%3E%3C/svg%3E"
  },
  {
    id: 5,
    name: "PURE STORAGE",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Crect width='200' height='60' fill='none'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%2394a3b8'%3EPURE STORAGE%3C/text%3E%3C/svg%3E"
  },
  {
    id: 6,
    name: "SKF INDIA",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Crect width='200' height='60' fill='none'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%2394a3b8'%3ESKF INDIA%3C/text%3E%3C/svg%3E"
  },
  {
    id: 7,
    name: "THALES INDIA",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Crect width='200' height='60' fill='none'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%2394a3b8'%3ETHALES%3C/text%3E%3C/svg%3E"
  },
  {
    id: 8,
    name: "LAWNWARE SOLUTIONS",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Crect width='200' height='60' fill='none'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='14' fill='%2394a3b8'%3ELAWNWARE%3C/text%3E%3C/svg%3E"
  },
  {
    id: 9,
    name: "OTS CONSULTING",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Crect width='200' height='60' fill='none'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%2394a3b8'%3EOTS%3C/text%3E%3C/svg%3E"
  },
  {
    id: 10,
    name: "ZENEXIM",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Crect width='200' height='60' fill='none'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%2394a3b8'%3EZENEXIM%3C/text%3E%3C/svg%3E"
  },
  {
    id: 11,
    name: "VISIONTIR",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Crect width='200' height='60' fill='none'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%2394a3b8'%3EVISIONTIR%3C/text%3E%3C/svg%3E"
  }
];
