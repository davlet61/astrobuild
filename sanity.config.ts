import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from '$schemas';
import Logo from '$components/React/StudioLogo';
import { media } from 'sanity-plugin-media';

export default defineConfig({
  basePath: '/studio',
  title: 'glass.no',
  projectId: 'csbn9wp4',
  dataset: 'glassno',
  studio: {
    components: {
      logo: Logo,
      input: (props: any) => console.log(props),
    },
  },
  plugins: [deskTool(), media(), visionTool()],
  schema: {
    types: schemas,
  },
  tools: (prev) => {
    if (import.meta.env.DEV) {
      return prev;
    }
    return prev.filter((tool) => tool.name !== 'vision');
  },
});
