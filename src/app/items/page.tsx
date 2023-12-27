
import { URL_API } from "@/services";
import Link from "next/link";




export default async function ItemsPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {  

  const url = new URL(URL_API + `search/${searchParams.search}`);

  const data = await fetch(url).then((r) => r.json());
  
  
  return (
    <section className="rounded-md animate-fade-up">
      <article className="grid gap-1 shodow rounded">
        {data.data.map((item: any) => (
          <Link href={`/items/${item.id}`} key={item.id}>
            <div className="flex bg-white p-5 gap-6">
              <img
                src={item.thumbnail}
                alt={item.title}
                title={item.title}
                width="150"
                height="150"
              />
              <div>
                <p className="text-xl font-bold my-6 text-black ">
                  {Number(item.price).toLocaleString("es-CL", {
                    style: "currency",
                    currency: "CLP",
                  })}
                </p>
                <p className="my-2 text-black">{item.title}</p>
                <p>{item.active}</p>
              </div>
              <span className="ml-auto text-sm capitalize opacity-50 text-black">
                {item.seller_address?.city.name.toLocaleLowerCase() ?? ""}
              </span>
            </div>
          </Link>
        ))}
      </article>
    </section>
  );
}
