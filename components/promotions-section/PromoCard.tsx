import React from "react";
import Image from "next/image";
import Link from "next/link";

import { promoData } from "@/data/promoData";

import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "../ui/button";

interface PromoCardProps {
  promo: (typeof promoData)[number];
}

const PromoCard: React.FC<PromoCardProps> = ({ promo }) => {
  return (
    <Card
      className="w-full max-w-[400px] bg-transparent md:shrink-0"
      style={{
        scrollSnapAlign: "start",
        scrollMargin: "0 10px",
      }}
    >
      <CardHeader className="p-4 md:p-6">
        {/* promo img */}
        <div className="relative aspect-[3/2]">
          <Image
            src={promo.image}
            alt={promo.title}
            fill
            placeholder="blur"
            sizes="350px"
            className="rounded-md border"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 md:p-6 md:pt-0">
        {/* learn more btn */}
        <Button
          variant={"outline"}
          className="group rounded-md text-white hover:bg-white/10 hover:text-white"
          asChild
        >
          <Link
            href={"#"}
            role="button"
            aria-label="Learn more about this promotion"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4  transition-transform group-hover:-rotate-45 group-hover:text-brand" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PromoCard;
