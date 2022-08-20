import { manifest, version } from '@parcel/service-worker'

async function install() {
  const cache = await caches.open(version)
  await cache.addAll(manifest)
}
addEventListener('install', e => e.waitUntil(install()))

async function activate() {
  const keys = await caches.keys()
  await Promise.all(
    keys.map(key => key !== version && caches.delete(key)),
  )
}
addEventListener('activate', e => e.waitUntil(activate()))

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open(version).then(cache => {
      return fetch(event.request.url)
        .then(fetchedResponse => {
          cache.put(event.request, fetchedResponse.clone())

          return fetchedResponse
        })
        .catch(() => {
          return cache.match(event.request.url)
        })
    }),
  )
})
