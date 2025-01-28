// import { Heart } from "lucide-react"
// import { cn } from "@/lib/utils"

// interface ProductCardProps {
//   name: string
//   price: number
//   originalPrice?: number
//   rating: number
//   image: string
//   isNew?: boolean
//   discount?: number
//   onAddToCart?: () => void
// }

// export function ProductCard({
//   name,
//   price,
//   originalPrice,
//   rating,
//   image,
//   isNew = false,
//   discount,
//   onAddToCart,
// }: ProductCardProps) {
//   return (
//     <div className="group relative bg-white p-2">
//       <div className="relative aspect-square overflow-hidden">
//         <img src={image || "/placeholder.svg"} alt={name} className="object-cover w-full h-full" />
//         {isNew && <span className="absolute left-2 top-2 bg-black text-white text-xs px-2 py-1">NEW</span>}
//         {discount && (
//           <span className="absolute left-2 top-9 bg-[#38CB89] text-white text-xs px-2 py-1">-{discount}%</span>
//         )}
//         <button
//           className="absolute right-2 top-2 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//           onClick={() => {}}
//         >
//           <Heart className="w-4 h-4" />
//         </button>
//         {onAddToCart && (
//           <button
//             onClick={onAddToCart}
//             className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity"
//           >
//             Add to cart
//           </button>
//         )}
//       </div>
//       <div className="mt-2">
//         <div className="flex text-yellow-400 mb-1">
//           {"★".repeat(rating)}
//           {"☆".repeat(5 - rating)}
//         </div>
//         <h3 className="font-medium text-sm">{name}</h3>
//         <div className="flex gap-2 items-center mt-1">
//           <span className="font-semibold">${price.toFixed(2)}</span>
//           {originalPrice && <span className="text-gray-400 line-through text-sm">${originalPrice.toFixed(2)}</span>}
//         </div>
//       </div>
//     </div>
//   )
// }

