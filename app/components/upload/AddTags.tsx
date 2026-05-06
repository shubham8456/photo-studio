import photoDetails from "@/data/photo_details.json";
import { PhotoDetails } from "@/types/photo";

interface AddTagsProps {
  formData: Partial<PhotoDetails>;
  setFormData: (data: Partial<PhotoDetails>) => void;
}

const categories = [...new Set(photoDetails.photo_data.flatMap(photo => photo.tags.map(tag => tag.toUpperCase())))];

export default function AddTags({ formData, setFormData }: AddTagsProps) {
  return (
    <div className="space-y-8">
      <div>
        <label className="block font-label-sm text-xs text-slate-500 uppercase tracking-wider mb-4">
          Adding Tags helps users in filtering photos
        </label>
        <div className="relative">
          <input
            type="text"
            className="w-full bg-[#E0E5EC] border-none soft-ui-recessed rounded-xl px-6 py-4 focus:ring-0 text-slate-800 placeholder:text-slate-400 pr-14"
            placeholder="Comma-separated, e.g., snow, ocean, coast"
            onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',').map((t: string) => t.trim()) })}
          />
        </div>
      </div>
      <div>
        <label className="block font-label-sm text-xs text-slate-500 uppercase tracking-wider mb-4">
          Previously Used Tags
        </label>
        <div className="flex flex-wrap gap-4">
          {categories.map(
            (tag) => (
              <span
                key={tag}
                className="soft-ui-extruded px-4 py-2 rounded-full text-xs text-slate-600 flex items-center gap-2 cursor-pointer hover:shadow-sm"
              >
                {tag}{" "}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
