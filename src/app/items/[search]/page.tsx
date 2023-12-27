"use client";

import { URL_API } from "@/services";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ItemPage() {
  const params = useParams();
  const [dataProduct, setDataProducts] = useState(null);

  useEffect(() => {
    const url = new URL(URL_API + `search/${params.search}`);
    fetch(url)
      .then((r) => r.json())
      .then((data) => setDataProducts(data.data));
  }, [params.search]);

  return <div>{JSON.stringify(dataProduct)}</div>;
}
