// import Image from "next/image"
// import { statesJson } from "../page"
import axios from "axios"
// function fetchStates(params){
 
//     const states = statesJson.find((state)=>state.cca3 === params.slug)

//     return states
// }
export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.slug
 
  const product = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())
 
  const previousImages = (await parent).openGraph?.images || []
  return {
    title: product.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}

export default async function Page({ params, searchParams }) {
  const id = params.slug
  const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(data => data.data)
  return(
    <div className="app-page bg-dark text-light min-vh-100 pt-3 pb-5">
  <div className="container">
    <div className="app-info d-flex justify-content-between align-items-center w-75 mb-4">
      <div className="img">
        <img
          src="https://app.apkbaba.com/wp-content/uploads/Crash-Bandicoot-%D9%85%D9%87%D9%83%D8%B1%D8%A9-icon-apkbaba-150x150.webp"
          alt=""
        />
      </div>
      <div className="info">
        <div className="heading mb-4">
          <h1>{data.title}</h1>
        </div>
        <div className="rate mb-4">
          <i className="bi bi-star" />
          <i className="bi bi-star" />
          <i className="bi bi-star" />
          <i className="bi bi-star" />
          <i className="bi bi-star" />
        </div>
        <div className="more-info d-flex justify-content-between w-50">
          <div className="platform">
            <span>أندرويد 5.0</span>
          </div>
          <div className="version">
            <span>1.0.32.00.03</span>
          </div>
          <div className="size">
            <span>212.93MB</span>
          </div>
        </div>
      </div>
    </div>
    <div className="table-info mb-4">
      <table className="table table-dark table-striped text-center w-50 ms-auto me-auto">
        <tbody>
          <tr>
            <td>اسم اللعبة</td>
            <td>Auto Hero 2023</td>
          </tr>
          <tr>
            <td>الإصدار الحالي</td>
            <td>1.0.32.00.03</td>
          </tr>
          <tr>
            <td>الحجم</td>
            <td>212.93MB</td>
          </tr>
          <tr>
            <td>يتطلب نسخة أندرويد</td>
            <td>Android 5.0</td>
          </tr>
          <tr>
            <td>أخر تحديث</td>
            <td>14 أغسطس 2023</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="article">
      <div className="article-img text-center">
        <img src="https://app.apkbaba.com/wp-content/uploads/Auto-Hero-%D9%85%D9%87%D9%83%D8%B1%D8%A9-img-1-apkbaba.webp" alt="img" />
      </div>
      <div className="article-word"></div>
      <div className="features">
        <ul>
          <li>شخصيات رائعة وممتعة</li>
          <li>استراتيجيات ذكية لهزيمة الأعداء</li>
          <li>العناصر الخاصة والنادرة</li>
          <li>البيئة والفضاء في عالم الخيال</li>
          <li>تشكيل تحالف ومستعمرة غير قابلة للكسر</li>
          <li>العديد من المميزات الاخرى الرائعة..</li>
        </ul>
      </div>
    </div>
  </div>
</div>
)
}