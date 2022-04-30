import { AppConfig, ProductForm } from "../components/admin/adminforms";
import { AdminLayout } from "../components/admin/adminlayout";


export default function AdminPage() {
  return (
    <AdminLayout>
      <AppConfig />
    </AdminLayout>
  )
}