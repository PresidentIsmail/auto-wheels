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
      className="w-[400px] shrink-0 bg-transparent"
      style={{
        scrollSnapAlign: "start",
        scrollMargin: "0 10px",
      }}
    >
      <CardHeader>
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
      <CardContent className="">
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
